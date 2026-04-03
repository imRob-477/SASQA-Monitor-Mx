exports.handler = async (event) => {
  try {
    const { titulo, mensaje } = JSON.parse(event.body);

    const response = await fetch("https://onesignal.com/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic os_v2_app_kzgzwrgrafbxvh26mtfmnmjfw7m3cpxhhliun5ntffnotaowqb6nw77xqgdezyqdo3bkouxzaf37hcrf2igu3xlylxyvviydix56bxy"
          
      body: JSON.stringify({
        app_id: "564d9b44-d101-437a-9f5e-64cac6b125b7",
        included_segments: ["All"],
        headings: { es: titulo },
        contents: { es: mensaje }
      })
    });

    const data = await response.json();
    console.log("OneSignal response:", JSON.stringify(data));

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch(e) {
    console.log("Error:", e.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
