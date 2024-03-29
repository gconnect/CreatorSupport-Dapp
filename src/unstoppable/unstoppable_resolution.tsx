import axios from "axios"
import { Resolution }  from '@unstoppabledomains/resolution';
const resolution = new Resolution();

//To get the records attached to a domain, you must send a GET request to the domains endpoint 
//and provide the domain name parameter in your request. The endpoint will return all configured
//resolution records and domain metadata in a single response.

// Resolve a Crypto Address From a Domain using the library
export const resolveDomainUsingLibrary = (address : string) => resolution
  .addr(address, "ETH")
  .then((domain) =>
    domain
  )
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

export const reverseResolution = async (address: string) => {
  const domain = await resolution.reverse(address)
  console.log("domain " + domain)
  return domain
}

export async function resolveDomainUsingAPI(domain : string){
  const url = 'https://resolve.unstoppabledomains.com/reverse/'
  try{
    const response =  await  axios.get(`${url}${domain}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_UNSTOPPABLE_RESOLUTION_KEY}`,
        'Content-Type': 'application/json',
      }
    })
    // console.log(response.data.meta.owner)
    console.log("domain name" ,response.data.meta.domain)
    return response.data.meta.domain
  }catch(err){
    console.log(err)
  }
}

export function reverseUrl(address) {
  resolution
    .reverse(address, {location: 'UNSLayer2'})
    .then((domain) => console.log(address, 'reversed to url', domain))
    // domain consists of the domain with reverse resolution to that address
    // use this domain in your application
    .catch(console.error);
}