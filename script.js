// Przykład wywołania prawdziwego API AI (Replicate / Node.js backend):
const response = await fetch("https://api.replicate.com/v1/predictions", {
  method: "POST",
  headers: {
    "Authorization": "Token DOKŁADNY_TWÓJ_TOKEN_API",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    version: "MODEL_ID_HAIR_SWAP",
    input: {
      image: base64Image,
      prompt: "man with " + selectedStyle + " haircut, highly detailed photorealistic"
    }
  })
});
