/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { HomeProps } from '../../interfaces/home.interface';
import envirometns from '../../utils/envitoments';

const Home = ({ title }: HomeProps) => {
  const key = envirometns.secretKey;
  console.log(key);

  return (
    <div>{ title }</div>
  );
};

export default Home;
