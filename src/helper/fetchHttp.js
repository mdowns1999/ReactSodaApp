const fetchHttp = async (configObject) => {
  const response = await fetch(configObject.url);
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
