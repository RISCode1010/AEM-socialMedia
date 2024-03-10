
## Usage

#### Env variable:

Create a `.env file` in `config directory` and add the following:

```
MONGO_URI = "Your Mongo URI"
PORT = 4000
ACCESS_TOKEN_SECRET = "Your JWT Access Token secret"
REFRESH_TOKEN_SECRET = "Your JWT Access Token secret"
HOST = smtp.gmail.com
EMAIL_USERNAME = "your email id"
EMAIL_PASSWORD = "your email password for project testing"
EMAIL_FROM = "email id"

```

#### Server:

Note: Make sure that you have `installed 'nodemon' as global package`.

```
npm install
npm run dev
```
