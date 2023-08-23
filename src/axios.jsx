import axios from 'axios';
import {baseUrl} from './Constence/Constants'

const instance = axios.create({
    baseURL: baseUrl,

  });

export default instance  