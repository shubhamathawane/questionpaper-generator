curl --request POST \
  --url http://localhost:3001/api/questions \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
  "totalMarks": 100,
  "distribution": {
    "Easy":30,    
    "Medium": 50,  
    "Hard":20
  }
}'