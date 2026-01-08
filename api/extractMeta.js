

import metascraper from 'metascraper'

import metascraperTitle from 'metascraper-title'

import metascraperDescription from 'metascraper-description'

import metascraperLogo from 'metascraper-logo'

import metascraperUrl from 'metascraper-url'


const scraper = metascraper([

    metascraperTitle(),

    metascraperDescription(),

    metascraperLogo(),

    metascraperUrl()
])


export async function extractMeta(url) {
 
    try{

        const res = await fetch(url, {

            headers:{

                'user-agent': 'Mozilla/5.0 (compatible; MetaScraperBot/1.0)'
            }
        })

        if(res.ok){

            const html = await res.text()

            const metadata = await scraper({ html, url: res.url })

            return {

                title: metadata.title || null,
                
                description: metadata.description || null,
                
                favicon: metadata.logo || `https://www.google.com/s2/favicons?domain=${res.url}&sz=128`,
                
                domain: new URL(res.url).hostname
            }

        }
        else{

            throw new Error("")
        }
    }
    catch(error){

        throw new Error("can't retrieve url")
    }
}

