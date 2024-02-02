FROM golang:1.21.6

WORKDIR /bot/app

COPY go.mod go.sum ./

RUN go mod download

COPY . . 

COPY .env.development ./

RUN go build -o bot ./cmd/main.go

EXPOSE 8000

CMD [ "./bot" ]