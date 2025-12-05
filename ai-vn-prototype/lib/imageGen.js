export async function generateSceneImage(scenePrompt) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_HF_TOKEN`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: scenePrompt,
      }),
    }
  );

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}
