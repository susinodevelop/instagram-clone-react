const isServer = typeof window === 'undefined';
const baseURL = isServer ? process.env.NEXT_PUBLIC_API_URL : '';

export const useGET = async <T>(url: string): Promise<T> => {
    const response = await fetch(`${baseURL}${url}`);
    if (!response.ok) {
        throw new Error(`Failed to GET ${url}`);
    }
    try {
        const result = await response.json();
        return result as T;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to parse JSON from ${url}`);
    }
}


interface PostProps {
    url: string;
    pathParams?: Record<string, string>;
    queryParams?: Record<string, string>;
    bodyParams?: any;
}

export const usePOST = async <T>(props: PostProps): Promise<T> => {
    const { pathParams = {}, queryParams = {}, bodyParams = {} } = props;

    // Plantilla de URL
    let urlTemplate = `${baseURL}${props.url}`;

    // Reemplazar los placeholders en pathParams
    Object.keys(pathParams).forEach(key => {
        const value = pathParams[key];
        urlTemplate = urlTemplate.replace(`{${key}}`, value);
    });

    // Construir la cadena de consulta (query string)
    const queryString = new URLSearchParams(queryParams).toString();
    if (queryString) {
        urlTemplate += `?${queryString}`;
    }

    // Realizar la solicitud POST con fetch
    const response = await fetch(urlTemplate, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyParams),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch post at ${urlTemplate}`);
    }

    try {
        const result = await response.json();
        return result as T;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to parse JSON from ${props.url}`);
    }
};


interface PutProps {
    url: string;
    pathParams?: Record<string, string>;
    queryParams?: Record<string, string>;
    bodyParams?: any;
}

export const usePUT = async <T>(props: PutProps): Promise<T> => {
    const { pathParams = {}, queryParams = {}, bodyParams = {} } = props;

    // Plantilla de URL
    let urlTemplate = `${baseURL}${props.url}`;

    // Reemplazar los placeholders en pathParams
    Object.keys(pathParams).forEach(key => {
        const value = pathParams[key];
        urlTemplate = urlTemplate.replace(`{${key}}`, value);
    });

    // Construir la cadena de consulta (query string)
    const queryString = new URLSearchParams(queryParams).toString();
    if (queryString) {
        urlTemplate += `?${queryString}`;
    }

    // Realizar la solicitud POST con fetch
    const response = await fetch(urlTemplate, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyParams),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch put at ${urlTemplate}`);
    }

    try {
        const result = await response.json();
        return result as T;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to parse JSON from ${props.url}`);
    }
};

interface PatchProps {
    url: string;
    pathParams?: Record<string, string>;
    queryParams?: Record<string, string>;
    bodyParams?: any;
}

export const usePATCH = async <T>(props: PatchProps): Promise<T> => {
    const { pathParams = {}, queryParams = {}, bodyParams = {} } = props;

    // Plantilla de URL
    let urlTemplate = `${baseURL}${props.url}`;

    // Reemplazar los placeholders en pathParams
    Object.keys(pathParams).forEach(key => {
        const value = pathParams[key];
        urlTemplate = urlTemplate.replace(`{${key}}`, value);
    });

    // Construir la cadena de consulta (query string)
    const queryString = new URLSearchParams(queryParams).toString();
    if (queryString) {
        urlTemplate += `?${queryString}`;
    }

    // Realizar la solicitud POST con fetch
    const response = await fetch(urlTemplate, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyParams),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch PATCH at ${urlTemplate}`);
    }

    try {
        const result = await response.json();
        return result as T;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to parse JSON from ${props.url}`);
    }
};

export const useDELETE = async <T>(url: string): Promise<T> => {
    const response = await fetch(`${baseURL}${url}`);
    if (!response.ok) {
        throw new Error(`Failed to DELETE ${url}`);
    }

    try {
        const result = await response.json();
        return result as T;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to parse JSON from ${url}`);
    }
}