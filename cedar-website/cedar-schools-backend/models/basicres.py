from pydantic import BaseModel
from typing import Optional

class RegisterRes(BaseModel):
  ParentName : str
  ChildName : str
  grade : str
  phone : str
  email: str
  gender : str
  msg:Optional[str]
  dob:str
  acad:str