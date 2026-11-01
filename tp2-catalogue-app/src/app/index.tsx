import { View, Text, StyleSheet, ScrollView } from 'react-native';

const produits = [
  { id: 1, nom: 'Clavier', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', prix: 240, stock: 3 },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Catalogue des produits</Text>

      {produits.map((produit) => (
        <View key={produit.id} style={styles.produit}>
          <Text style={styles.nom}>{produit.nom}</Text>
          <Text>Prix : {produit.prix} MAD</Text>
          <Text>Stock : {produit.stock} unités</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  produit: {
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});