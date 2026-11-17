import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

type Operacao = '+' | '-' | '*' | '/';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('O resultado aparecerá aqui');

  function calcular(operacao: Operacao) {
    // TODO 1: verificar se os dois campos foram preenchidos.
    if (numero1.trim() === '' || numero2.trim() === '') {
      setResultado('Preencha os dois números para realizar a operação.');
      return;
    }

    const n1 = Number(numero1.replace(',', '.'));
    const n2 = Number(numero2.replace(',', '.'));

    // TODO 2: verificar se os valores são números válidos.
    if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
      setResultado('Digite números válidos.');
      return;
    }

    let valor: number;

    // TODO 3: implementar as quatro operações matemáticas.
    if (operacao === '+') {
      valor = n1 + n2;
    } else if (operacao === '-') {
      valor = n1 - n2;
    } else if (operacao === '*') {
      valor = n1 * n2;
    } else if (operacao === '/') {
      // TODO 4: impedir divisão por zero.
      if (n2 === 0) {
        setResultado('Não é possível realizar divisão por zero.');
        return;
      }
      valor = n1 / n2;
    }

    // TODO 5: atualizar o resultado apresentado na tela.
    setResultado(String(valor));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Calculadora</Text>

      <TextInput
        style={styles.campo}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.campo}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.linha}>
        <Pressable style={styles.botao} onPress={() => calcular('+')}>
          <Text style={styles.textoBotao}>Somar +</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={() => calcular('-')}>
          <Text style={styles.textoBotao}>Subtrair −</Text>
        </Pressable>
      </View>

      <View style={styles.linha}>
        <Pressable style={styles.botao} onPress={() => calcular('*')}>
          <Text style={styles.textoBotao}>Multiplicar ×</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={() => calcular('/')}>
          <Text style={styles.textoBotao}>Dividir ÷</Text>
        </Pressable>
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F2F6FA',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#183e5b',
  },
  campo: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B8C7D6',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
  },
  linha: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    backgroundColor: '#246B9E',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resultado: {
    backgroundColor: '#DCEAF5',
    padding: 18,
    borderRadius: 8,
    marginTop: 18,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
});
