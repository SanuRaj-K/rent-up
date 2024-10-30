const { auth } = require("@/firebase/firebaseConfig");
const { onAuthStateChanged } = require("firebase/auth");
const { default: toast } = require("react-hot-toast");

export const checkUserAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      toast.success("user logged");
    } else {
      toast.error("no user logged");
    }
  });
};
