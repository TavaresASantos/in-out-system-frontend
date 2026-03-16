# Guia de Integração - In-Out System Backend

Este documento serve como referência para o desenvolvimento do Front-End (React, Angular, Vue ou Mobile).

## 🚀 Informações Gerais
- **Base URL:** `http://localhost:3000`
- **Porta do Banco (Direta):** `5435` (localhost)
- **Formato:** JSON
- **Autenticação:** JWT (Bearer Token)

---

## 🔐 Autenticação (Auth)

### 1. Login
Utilizado para obter o token de acesso.
- **Rota:** `POST /auth/login`
- **Corpo da Requisição:**
```json
{
  "email": "admin@sistema.com",
  "senha": "admin"
}
```
- **Resposta (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5...",
  "usuario": {
    "id": 1,
    "nome": "Administrador",
    "email": "admin@sistema.com"
  }
}
```

### 2. Registro (Cadastro de novos usuários)
- **Rota:** `POST /auth/register`
- **Header:** `Authorization: Bearer <TOKEN_JWT>` (Necessita estar logado)
- **Corpo:**
```json
{
  "nome": "João Silva",
  "email": "joao@exemplo.com",
  "senha": "senha123"
}
```

---

## 📊 Dashboards & KPIs

### 1. Resumo de Visitas e Picos
Retorna o total de pessoas que entraram/saíram e os horários de maior fluxo.
- **Rota:** `GET /kpis/summary`
- **Header:** `Authorization: Bearer <TOKEN_JWT>`
- **Resposta Exemplo:**
```json
{
  "total_entradas": 150,
  "total_saidas": 120,
  "pico_lotacao_hora": "15:00",
  "fluxo_atual": 30
}
```

### 2. Ranking Mensal
Retorna estatísticas comparativas entre os meses.
- **Rota:** `GET /kpis/ranking`
- **Header:** `Authorization: Bearer <TOKEN_JWT>`
- **Resposta Exemplo:**
```json
[
  { "mes": "Janeiro", "visitantes": 450 },
  { "mes": "Fevereiro", "visitantes": 600 }
]
```

---

## 📹 Câmeras & Monitoramento

### 1. Obter Link de Stream
Retorna o endereço RTSP para exibição do vídeo (via player compatível como WebRTC-adapter ou VLC).
- **Rota:** `GET /camera/:id/stream`
- **Parâmetro:** `:id` (ID numérico da câmera)
- **Header:** `Authorization: Bearer <TOKEN_JWT>`
- **Resposta Exemplo:**
```json
{
  "id": 1,
  "nome": "Entrada Principal",
  "url_rtsp": "rtsp://admin:senha@192.168.1.50:554/stream1"
}
```

---

## 🛠️ Como Integrar (Exemplo com Axios no React)

1. **Instale o Axios:** `npm install axios`
2. **Configure uma instância:**
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// Adiciona o token em todas as requisições se existir no localStorage
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

3. **Chamando o Login:**
```javascript
const handleLogin = async (email, senha) => {
  try {
    const response = await api.post('/auth/login', { email, senha });
    localStorage.setItem('token', response.data.token);
    alert('Logado!');
  } catch (error) {
    console.error('Erro no login', error);
  }
};
```

## ⚠️ Erros Comuns
- **401 Unauthorized:** O token expirou ou não foi enviado no header.
- **403 Forbidden:** Você está logado mas não tem permissão para essa ação.
- **500 Internal Server Error:** Provavelmente o banco de dados (Docker) está offline.
