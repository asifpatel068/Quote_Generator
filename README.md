# Deployed link: `https://quote-generator-ten-omega.vercel.app/`

# Quote Generator API Documentation

The Quote Generator API provides a simple and convenient way to generate inspirational or motivational quotes based on user input. It integrates with the OpenAI GPT-3.5 Turbo model to generate the quotes. The API accepts a keyword as input and returns a relevant quote in the response.

## API Endpoint

- Endpoint: ` https://quote-generator.onrender.com/generate-quote`
- Method: GET

## Request Parameters

| Parameter | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| keyword   | string | The keyword related to the desired quote theme.  |

## Example Request

GET  https://quote-generator.onrender.com/generate-quote?keyword=success


## Example Response

```json
{
  "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "author": "Winston Churchill"
}
