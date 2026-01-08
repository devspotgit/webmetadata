# webmetadata

Extract Wesite meta data from a single url.

Use the link below to try it.

[Webmetadata](https://webmetadata.vercel.app/)

Meta data are extacted as a Json object.

```
{
    error,

    data:{

        title,
                
        description,

        favicon,

        domain 
    }
}
```

Returns a null data, and error message when error occurs.

## usage 

```
/getmeta?url=your url
```

