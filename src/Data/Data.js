import { realtimeDb } from '../Data/firebaseConnetcion';
import {
  ref,
  push,
  remove,
  update,
  onValue,
} from 'firebase/database';

// ✅ LISTAR DESPESAS
export function listarDespesa() {
  return new Promise((resolve, reject) => {
    const despesasRef = ref(realtimeDb, 'listax');
    onValue(
      despesasRef,
      (snapshot) => {
        const returnArr = [];

        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.push(item);
        });

        resolve(returnArr);
      },
      (error) => reject(error)
    );
  });
}


export function adicionarDespesa(data) {
  const despesasRef = ref(realtimeDb, 'listax');
  push(despesasRef, data)
    .then(() => alert('✅ Despesa cadastrada com sucesso!'))
    .catch((error) =>
      alert('❌ Erro ao cadastrar despesa: ' + error.message)
    );
}

export function excluirDespesa(keyDespesa) {
  const itemRef = ref(realtimeDb, `listax/${keyDespesa}`);
  remove(itemRef)
    .then(() => alert('🗑️ Despesa excluída com sucesso!'))
    .catch((error) =>
      alert('❌ Erro ao excluir despesa: ' + error.message)
    );
}


export function editarDespesa(keyDespesa, data) {
  const itemRef = ref(realtimeDb, `listax/${keyDespesa}`);
  update(itemRef, data)
    .then(() => alert('✏️ Despesa editada com sucesso!'))
    .catch((error) =>
      alert('❌ Erro ao editar despesa: ' + error.message)
    );
}

