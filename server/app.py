import os
import requests
from dotenv import load_dotenv
from enum import Enum
from fastapi import FastAPI
import google.generativeai as genai

load_dotenv()

# Google GenAI Configure
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
EDENAI_API_KEY = os.getenv("EDENAI_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

text_model = genai.GenerativeModel("gemini-pro")
image_model = genai.GenerativeModel("gemini-pro-vision")


# FastAPI Server
app = FastAPI()


@app.get("/")
def read_root():
    return {
        "status": "Server is up and running on PORT 8000",
        "endpoints": {
            "/experiment/aim": "Get the details of the experiment",
            "/experiment/apparatus": "Get the required apparatus to perform the experiment",
            "/experiment/theory": "Get the details of the experiment",
            "/experiment/setup": "Get the experimental setup of the experiment",
            "/experiment/procedure": "Get the step by step flow of the experiment",
            "/experiment/tabulation": "Get the sample tabular column for the experiment",
            "/experiment/result": "Get to know the expected result of the experiment",
            "/experiment/precautions": "List of things to follow to perform the experiment",
            "/experiment/chat": "Clarify the doubts of the experiment in Chat like Interface",
        },
    }


class Subjects(Enum):
    PHYSICS = "Physics"
    CHEMISTRY = "Chemistry"
    BIOLOGY = "Biology"


@app.post("/experiment/aim")
def get_experiment_aim(title: str, subject: Subjects) -> dict:
    prompt = f"""
        Generate just a two liner aim of the science experiment provided the {title} 
        of the experiment and the {subject} based on which the experiment corresponds to.

        Do not respond with more than two lines.

        Answer : {{Aim of the experiment}}
    """

    response = text_model.generate_content(prompt)

    return {"response": response.text}


@app.post("/experiment/apparatus")
def get_experiment_apparatus(title: str, subject: Subjects) -> dict:
    prompt = f"""
        Generate a list (in form of bullet points) of apparatus requrired for the experiment: {title} 
        of the experiment and the {subject} based on which the experiment corresponds to.

        Response must only contain bullet points of the experiment.

        Answer : {{Apparatus Required}}
    """

    response = text_model.generate_content(prompt)

    return {"response": response.text}


@app.post("/experiment/theory")
def get_experiment_theory(title: str, subject: Subjects) -> dict:
    prompt = f"""
        Generate a maximum 2 paragraph of the theory associated with the experiment: {title} 
        and the {subject} based on which the experiment corresponds to.

        Response must only paragraph. Important: Always support with necessary equations for
        better student experience.

        Answer : {{Theoretical Explanation}}
    """

    response = text_model.generate_content(prompt)

    return {"response": response.text}


@app.post("/experiment/setup")
def get_experiment_setup(title: str, subject: Subjects) -> str:
    prompt = f"""
        Generate a caption of the experimental setup of {title} 
        and the {subject} based on which the experiment corresponds to.

        Response must speak only about the setup and more clarity should
        be provided to the placement of the apparatus in the right manner.

        Answer : {{Setup}}
    """

    image_caption = text_model.generate_content(prompt)

    # EdenAI Image
    url = "https://api.edenai.run/v2/image/generation"
    payload = {
        "response_as_dict": True,
        "attributes_as_list": False,
        "show_original_response": False,
        "num_images": 1,
        "providers": "deepai",
        "text": f"{image_caption.text}",
        "resolution": "512x512",
    }

    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": f"Bearer {EDENAI_API_KEY}",
    }

    response = requests.post(url, json=payload, headers=headers)

    return {"response": response.text}


@app.post("/experiment/procedure")
def get_experiment_procedure(title: str, subject: Subjects) -> dict:
    prompt = f"""
        Generate a list (in form of bullet points) of the step by step method to perform the experiment
        title {title} and the {subject} based on which the experiment corresponds to.

        Response must only contain bullets no need any headings.

        Answer : {{Procedure}}
    """

    response = text_model.generate_content(prompt)

    return {"response": response.text}


@app.post("/experiment/procedure")
def get_experiment_procedure(title: str, subject: Subjects) -> dict:
    prompt = f"""
        Generate a list (in form of bullet points) of the step by step method to perform the experiment
        title {title} and the {subject} based on which the experiment corresponds to.

        Response must only contain bullets no need any headings.

        Answer : {{Procedure}}
    """

    response = text_model.generate_content(prompt)

    return {"response": response.text}


@app.post("/experiment/tabulation")
def get_experiment_procedure(title: str, subject: Subjects) -> dict:
    prompt = f"""
        Generate a table with necessary column names to derive the results of the experiment
        titled {title} and the subject being {subject} based on which the experiment corresponds to.

        Response must contain only the column headers with sample values with accurate units of measurement.

        Answer : {{Tabulation}}
    """

    response = text_model.generate_content(prompt)

    return {"response": response.text}
