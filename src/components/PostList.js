import {View, Text, StyleSheet, FlatList} from 'react-native';
import { Post } from './Post';

export const PostList = ({data, onOpen}) => {
    return (
        <View style={styles.wrapper}>
            {data.length > 0 ? 
                (
                    <FlatList
                    data={data}
                    keyExtractor={(post) => post.id.toString()}
                    renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
                    />
                )
                :
                (
                    <Text style={styles.noItems}>Empty :(</Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    }, 
    noItems: {
        fontFamily: 'montserrat-regular',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10, 
    }
});