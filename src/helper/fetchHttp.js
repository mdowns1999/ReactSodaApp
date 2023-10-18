const fetchHttp = async (configObject) => {
  const response = await fetch(configObject.url, {
    method: configObject.method ? configObject.method : 'GET',
    headers: configObject.headers ? configObject.headers : {},
    body: configObject.body ? JSON.stringify(configObject.body) : null
  });
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: configObject.error.message }),
      { status: configObject.error.status }
    );
  } else {
    return response;
  }
};

export default fetchHttp;
