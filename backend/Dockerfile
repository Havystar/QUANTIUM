FROM python:3.11

RUN pip install poetry

EXPOSE 80

WORKDIR /app 

COPY ./poetry.lock ./pyproject.toml .

RUN poetry install

COPY . .

CMD poetry run uvicorn app:app --host 0.0.0.0 --port 80
