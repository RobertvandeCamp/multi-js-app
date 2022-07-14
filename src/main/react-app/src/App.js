import logo from './logo.svg';
import './App.css';
import {
    ChakraProvider
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";
import {CustomForm} from "./FormPage";
import theme from './theme';
import './theme/styles.css';

function App() {
    return (
        <ChakraProvider theme={theme} >
            <CustomForm/>
        </ChakraProvider>
    );
}

export default App;
