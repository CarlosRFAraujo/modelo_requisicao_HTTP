import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';

// Importando api:
import api from './src/services/api'

// Importando component Filmes:
import Filmes from './src/filmes';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      filmes: [],
      loading: true,
    }
  }

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')
    this.setState({
      filmes: response.data,
      loading: false
    })
  }


  render() {
    if(this.state.loading) {
      return(
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={'#fff'} size={60} />
        </View>
      );
    } else {
      return(
        <View style={styles.container}>
          <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0A01',
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0A01',
  },
  loading: {
    size: 300,
    color: '#fff'
  },
});

export default App;
