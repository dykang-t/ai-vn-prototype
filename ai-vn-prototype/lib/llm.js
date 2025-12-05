export async function generateScenePrompt(userInput) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/meta-llama/Llama-3-8b-instruct",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer YOUR_HF_TOKEN`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `사용자 입력: ${userInput}
너의 역할: 연애 비주얼 노벨의 작가
목표: 입력 내용을 기반으로 '한 장면을 묘사하는 프롬프트' 생성하기.
출력 예시: "카페 창가에서 피곤한 표정으로 앉아 있는 남자 주인공을 걱정스럽게 바라보는 여자 캐릭터"`
      }),
    }
  );

  const data = await response.json();
  return data[0].generated_text;
}

export async function generateSceneText(userMessage) {
  const res = await fetch(
    "https://api-inference.huggingface.co/models/gpt2",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN || process.env.HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `User: ${userMessage}\nScene:`,
      }),
    }
  );

  const data = await res.json();
  const text = data[0]?.generated_text;
  return text ? text.replace(/User:.+?Scene:/, "").trim() : "장면 설명 생성에 실패했습니다.";
}
