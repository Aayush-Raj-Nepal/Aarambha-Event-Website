const fs = require('fs')
const path = require('path')

// Define the path to your Next.js project's folder where your code is located (e.g., pages, components)
const directoryPath = path.join(__dirname, 'src') // Adjust this based on where your code is located

// Firebase base URL for production
const firebaseBaseUrl = 'https://aarambha-website.web.app' // Replace with your Firebase Hosting URL

// Function to replace image paths with Firebase-hosted URLs
const replaceImagePaths = (fileContent) => {
  // Match image paths from /public/images
  const regex = /\/images\/([a-zA-Z0-9-_]+\.(?:png|jpg|jpeg|gif|svg))/g

  // Replace local image paths with Firebase-hosted URLs
  return fileContent.replace(regex, `${firebaseBaseUrl}/images/$1`)
}

// Function to recursively read and replace image paths in files
const processFilesInDirectory = (directory) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(`Error reading directory: ${err}`)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file)

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.log(`Error reading file: ${err}`)
          return
        }

        // If it's a directory, recursively process the files inside it
        if (stat.isDirectory()) {
          processFilesInDirectory(filePath)
        } else if (stat.isFile() && /\.(js|jsx|ts|tsx|html)$/.test(file)) {
          // Process only JavaScript, TypeScript, and HTML files

          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.log(`Error reading file: ${err}`)
              return
            }

            // Replace image paths
            const updatedContent = replaceImagePaths(data)

            // Write the updated content back to the file
            fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
              if (err) {
                console.log(`Error writing to file: ${err}`)
              } else {
                console.log(`Updated image paths in file: ${filePath}`)
              }
            })
          })
        }
      })
    })
  })
}

// Run the script only in production mode
if (process.env.NODE_ENV === 'production') {
  processFilesInDirectory(directoryPath)
} else {
  console.log('Not in production mode. No changes made.')
}
