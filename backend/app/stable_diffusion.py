from fastapi import APIRouter, Response
from base64 import b64decode, b64encode
from os import environ

from app.quantum import do_quantum_stuff
from httpx import AsyncClient
from json import dumps
from PIL import Image


stable_router = APIRouter()

HOST = environ.get("HOST", "auto")
URL = f"http://{HOST}:7860/sdapi/v1/img2img"


@stable_router.post("/quantum_image")
async def get_quantum_stuff_from_sd(prompt: str):
    quantum_img = do_quantum_stuff()
    img_bytes = b64encode(quantum_img).decode()
    encoded = f"data:image/png;base64,{img_bytes}"

    async with AsyncClient() as client:
        data = {
            "init_images": [encoded],
            "resize_mode": 1,
            "denoising_strength": 0.75,
            "image_cfg_scale": 1,
            "initial_noise_multiplier": 0.1,
            "prompt": prompt,
            "styles": [],
            "seed": -1,
            "subseed": -1,
            "subseed_strength": 0.1,
            "seed_resize_from_h": 1,
            "seed_resize_from_w": 1,
            "sampler_name": "Euler a",
            "batch_size": 1,
            "n_iter": 1,
            "steps": 70,
            "cfg_scale": 7,
            "width": 384,
            "height": 384,
            "negative_prompt": "",
            "include_init_images": False,
            "script_name": None,
            "send_images": True,
            "save_images": False,
        }
        response = await client.post(
            URL, content=dumps(data), timeout=999999999999999
        )
        if response.status_code != 200:
            raise Exception(response.text)

        return Response(
            content=b64decode(response.json()["images"][0]),
            media_type="image/png",
        )
