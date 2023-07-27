import '/styles/globals.css'
import Header from '../src/components/layout/Header'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export default function App({ Component }) {
    const apolloClient =  new ApolloClient({
        uri : "http://backend-practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache() //컴퓨터의 메모리에, 백엔드에서 받아온 데이터를 임시 저장 
    })

    return (
        <ApolloProvider client={apolloClient}>
            <Header/>
            <Component/>
        </ApolloProvider>
    )
}
