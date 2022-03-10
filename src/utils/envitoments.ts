interface Env {
    secretKey: string;
}

const envirometns: Env = {
  secretKey: process.env.REACT_APP_SECRET_KEY || 'secret',
};

export default envirometns;
