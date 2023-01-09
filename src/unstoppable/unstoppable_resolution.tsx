import axios from "axios"
import { Resolution }  from '@unstoppabledomains/resolution';
const resolution = new Resolution();

//To get the records attached to a domain, you must send a GET request to the domains endpoint 
//and provide the domain name parameter in your request. The endpoint will return all configured
//resolution records and domain metadata in a single response.

// Resolve a Crypto Address From a Domain using the library
export const resolveDomainUsingLibrary = (domain : string) => resolution
    .addr(domain, 'ETH')
  .then((ethAddress) =>  ethAddress)
    .catch((error) => {
        if (error.code === 'UnregisteredDomain') {
            console.log('Domain is not registered')
        }
        if (error.code === 'RecordNotFound') {
            console.log('Crypto record is not found (or empty)')
        }
        if (error.code === 'UnspecifiedResolver') {
            console.log('Domain is not configured (empty resolver)')
        }
        if (error.code === 'UnsupportedDomain') {
            console.log('Domain is not supported')
        }
    });

export async function resolveDomainUsingAPI(domain : string){
  const url = 'https://resolve.unstoppabledomains.com/domains/'
  try{
    const response =  await  axios.get(`${url}${domain}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_UNSTOPPABLE_RESOLUTION_KEY}`,
        'Content-Type': 'application/json',
      }
    })
    console.log(response.data.meta.domain)
    return response.data.meta.owner
  }catch(err){
    console.log(err)
  }
}