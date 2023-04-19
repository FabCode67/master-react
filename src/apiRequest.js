const apiRequest = async (url, options = null, errorMessage= null) => {
    try {
        const response = await fetch(url, options)
        if (!response.ok) throw new Error("Please reload the app")
    } catch (error) {
        errorMessage = error.message
    }
    finally {
        return errorMessage
    }
}

export default apiRequest