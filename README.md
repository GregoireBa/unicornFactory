# Unicorn

This project is for the purpose of a technical test.

## Docker Install/Run

```
git https://github.com/GregoireBa/unicornFactory.git
cd unicornFactory
docker build -t unicorn:latest .
docker run --name unicorn -d -p 4000:80 unicorn:latest
```

`App running on http://127.0.0.1:4000/`
