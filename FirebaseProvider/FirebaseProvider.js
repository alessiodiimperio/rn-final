import React, { useContext, createContext } from "react";
import { auth, db } from "../firebase.service";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const firebase = {
        getScaffoldings: async () => {
            return new Promise((resolve, reject) => {
                db.collection(`${auth.currentUser.uid}`)
                    .get()
                    .then((snapshot) => {
                        let documents = [];
                        snapshot.forEach((doc) => {
                            documents.push(doc.data());
                        });
                        resolve(documents);
                    })
                    .catch(reject);
            });
        },
        saveScaffolding: async (scaffold) => {
            return new Promise((resolve, reject) => {
                const scaffRef = db
                    .collection(`${auth.currentUser.uid}`)
                    .doc();
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
