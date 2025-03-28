const config = {
  secret_key: process.env.SECRET_KEY || 'default',
  port: process.env.PORT || 3000,
  // podes adicionar mais configs aqui depois se precisares
};

export default config;
