import React from "react";
import firestore from 'firebase/app';
import 'firebase/firestore';


const memoCardRef = firestore.collection('memoCards').doc();

const newMemoCard = {
  question: 'What is the capital of France?',
  answer: 'Paris',
  created_by: currentUserRef,
  created_at: firebase.firestore.FieldValue.serverTimestamp(),
  updated_at: firebase.firestore.FieldValue.serverTimestamp(),
};

memoCardRef.set(newMemoCard)
  .then(() => {
    console.log('Memo card added successfully!');
  })
  .catch((error) => {
    console.error('Error adding memo card: ', error);
  });

