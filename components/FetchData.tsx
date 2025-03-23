import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator, ScrollView} from 'react-native';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{marginTop: 10, fontSize: 16}}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red', fontSize: 16}}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ 
      flex: 1, 
      backgroundColor: '#f5f5f5'
    }}>
      <View style={{ padding: 16 }}>
        {data.map((item: any) => (
          <View key={item.id} style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 8,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3
          }}>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold',
              marginBottom: 8,
              color: '#333'
            }}>
              {item.title}
            </Text>
            <Text style={{ 
              fontSize: 14,
              color: '#666',
              lineHeight: 20
            }}>
              {item.body}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FetchData;
