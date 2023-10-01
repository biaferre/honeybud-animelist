import axios from 'axios'
import oauth from 'axios-oauth-client'

interface ISignInUseCaseRequest {
    user: string,
    password: string
}