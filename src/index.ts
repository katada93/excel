import { sleep } from '@/utils';
import './scss/index.scss';

sleep(123).then((result) => {
  console.log(result);
});
