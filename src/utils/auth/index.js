import { auth } from "../../firebase";

export default function getUserWithProvider(provider) {
  auth.signInWithPopup(provider);
}
