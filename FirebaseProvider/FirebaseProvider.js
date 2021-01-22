import React, { useContext, createContext } from "react";
import { auth, db } from "../firebase.service";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    let unsubscribe = () => {};
    const firebase = {
        subscribeForScaffoldings: (callback) => {
            unsubscribe = db.collection(`${auth.currentUser.uid}`).onSnapshot(
                (snap) => {
                    let documents = [];
                    snap.forEach((doc) => documents.push(doc.data()));
                    callback(documents);
                },
                (error) => console.log(error)
            );
        },
        unsubscribe: () => unsubscribe(),
        saveScaffolding: async (scaffold) => {
            return new Promise((resolve, reject) => {
                const scaffRef = db.collection(`${auth.currentUser.uid}`).doc();
                scaffRef
                    .set({ ...scaffold, id: scaffRef.id })
                    .then(() => resolve(scaffRef.id))
                    .catch(reject);
            });
        },
        deleteScaffolding: async (id) => {
            return new Promise((resolve, reject) => {
                db.collection(`${auth.currentUser.uid}`)
                    .doc(id)
                    .delete()
                    .then(resolve)
                    .catch(reject);
            });
        },
    };
    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    );
};
export const useFirebase = () => useContext(FirebaseContext);
