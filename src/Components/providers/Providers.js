"use client"; 

import { Provider } from 'react-redux';
import authStore from "@/redux/store/authStore";

export default function Providers({ children }) {
  return <Provider store={authStore}>{children}</Provider>;
}
