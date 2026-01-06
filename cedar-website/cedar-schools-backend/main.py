import os
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from models.basicres import RegisterRes

origins = [
    "https://9055d1a2-4788-4ebd-a998-aeb266bde9e5-00-f2g3hprmt7lb.sisko.replit.dev"
]

app = FastAPI()

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_methods=["*"],
                   allow_credentials=True,
                   allow_headers=["*"])

sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))


@app.get('/')
async def root():
  return {"hello world"}


@app.post("/register")
async def register(sample: RegisterRes):
  payload = f"""
  New Registration Received 🎊 :

  *Name: {sample.ParentName}
  *Gender : {sample.gender}
  *Parent Name : {sample.ChildName}
  *Grade : {sample.grade}
  *Phone : {sample.phone}
  *Email : {sample.email}
  *DOB : {sample.dob}
  *Academics : {sample.acad}
  *Message : {sample.msg}
  """
  message = Mail(from_email='abnvbh7@gmail.com',
                 to_emails=['abnvbh7@gmail.com', 'marykumaribadugu@gmail.com'],
                 subject='New Registration Recieved 🔥 🎊',
                 plain_text_content=payload)
  try:
    res = sg.send(message)
    print(res.status_code)
    print(res.body)
    return {"data": "success"}
  except Exception as e:
    print(e)
    return {"data": "failed"}


uvicorn.run(app, host="0.0.0.0", port=8000)
