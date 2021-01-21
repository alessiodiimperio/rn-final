import React, { useContext, createContext, useState } from "react";
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
                db.collection(`${auth.currentUser.uid}`)
                    .doc(scaffold.id)
                    .set(scaffold)
                    .then(resolve)
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
