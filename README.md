# Template for deploying a Langchain Node.js app to Fly

## Running it locally

Install dependencies

`$ yarn`

Run the app in watch mode

`$ OPENAI_API_KEY=<your key> yarn dev`

Try it

`$ curl -H 'Content-Type: application/json' -d '{"input": "hi there"}' 'http://localhost:8080/chat'`

This template has been setup for using with VSCode. You can visit https://yarnpkg.com/getting-started/editor-sdks for setup instructions for other editors.

## Deploying to Fly

Install flyctl on Mac OS

`$ brew install flyctl`

Login on your account

`$ flyctl auth login`

Deploy to the world

`$ fly launch -e OPENAI_API_KEY=<your key>`

Try it

`$ curl -H 'Content-Type: application/json' -d '{"input": "hi there"}' 'https://<your app>.fly.dev/chat'`
