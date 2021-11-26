import {
    initializeApp,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged, 
    signInWithRedirect,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
import {
    addImage,
    clearAllImages,
    showLoginUi,
} from "/ui.js";
import {
    getCurrentTime,
    getRandomString,
} from '/utils.js';

/**
 * deleteImage es la función que se llama cuando un usuario hace click en el
 * botón de eliminar imagen.
 * 
 * @param {string} id ID de la imagen en la base de datos.
 * @param {string} path Ruta de la imagen en el almacenamiento.
 */
export function deleteImage(id, path) {

}

/**
 * logIn es la función que se llama cuando un invitado hace click en el botón
 * de iniciar sesión.
 */
export function logIn() {

}

/**
 * logOut es la función que se llama cuando un usuario hace click en el botón
 * de cerrar sesión.
 */
export function logOut() {

}

/**
 * uploadImage es la función que se llama cuando un invitado o usuario pulsan
 * el botón de Subir imagen tras rellenar el formulario.
 * 
 * Los datos se comprueban que son correctos antes de llamar a esta función.
 * 
 * @param {string} title Título de la imagen a subir.
 * @param {File} image Archivo de imagen a subir.
 */
export async function uploadImage(title, image) {

}
