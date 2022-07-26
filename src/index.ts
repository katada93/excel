import './style.css';
import { sleep } from '@/utils';

sleep(123).then((result) => {
  console.log(result);
});
