## API de Login com Node.js
**Essa API simula de uma forma bem simples um login, que se o email e senhas estão certo, ele retorna um 201 se não um 401.**


## 🐳 Rode o Docker

1. Clone o repositório:
   ```sh
   git clone 
   cd Back-End
   ```

2. Construa a imagem Docker:
   ```sh
   docker build -t api-node .
   ```
3. Execute o container:
   ```sh
   docker run -p 3000:3000 api-node
   ```

## 📌 Endpoints

🔹 POST /login
Este endpoint verifica as credenciais do usuário e retorna os dados caso sejam válidos.

## Corpo da requisição (JSON):
```json
{
  "email": "Email@email.com",
  "senha": "123"
}
```

**📤 Resposta de sucesso (201 - Created)**
```json
{
  "id": 1,
  "name": "gabriel",
  "email": "Email@email.com",
  "senha": "123"
}
```

**❌ Resposta de erro (401 - Unauthorized)**
```json
{
  "message": "Credenciais invalidas"
}
```

## 📞 CONTATO  
👨‍💻 **Desenvolvedor:** **Gabriel** 
