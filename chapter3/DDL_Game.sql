-- membuat database
create database game;

-- pindah ke database game
\c game;

--membuat tabel user_game
    --username dibuat unique karena tidak mungkin ada username sama antar akun, not null karena setiap akun harus punya username
    --password dibuat not null karena setiap akun pasti memiliki password. kemudian di cek apakah password memiliki minimal 8 karakter
    --last active not null karena setiap akun pasti pernah login (pertama kali ketika membuat akun game). default dari last_active adalah waktu sekarang.
create table user_game(
    id          bigserial       primary key,
    username    varchar(100)    unique not null,
    "password"  varchar(255)    not null check(length("password") >= 8),
    last_active timestamp       not null default now()
);

--membuat tabel stage
    --name stage tidak mungkin null karena setiap stage harus memiliki nama supaya penyebutan stage dalam game lebih mudah
    --difficulty meruapakan tingkat kesulitan dalam game dengan tingkatan (paling mudah ke paling susah) antara 1 sampai 10
create table stage(
    id          bigserial       primary key,
    name        varchar(255)    not null,
    difficulty  smallint        not null check(difficulty >=  1 and difficulty <= 10)
);

-- membuat tabel user_game_history
    --user_game_id merupakan foreign key yang merujuk pada table user_game
    --stage_id merupakan foreign key yang merujuk pada table stage
    --timestamp merupakan waktu tercatatanya history game. default dari timestamp adalah waktu sekarang.
    --scre merupakan skor perolehan user dalam menyelesaikan stage. skor selalu positif sehingga harus lebih dari 0. default dari skor adalah 0 dengan anggpan usernya ga ngapa"in.
    --pada user_game_id dan stage_id jika terdapat penghapusan terhadap user_game atau stage maka history dari user atau stage tersebut akan dihapus juga.
create table user_game_history(
    id              bigserial   primary key,
    user_game_id    bigint      not null,
    stage_id        bigint      not null,
    "timestamp"     timestamp   default now(),
    score           int         default 0 check(score > 0),
    constraint      fk_user_game
        foreign key (user_game_id)
        references  user_game(id)
        on update   cascade
        on delete   cascade,
    constraint      fk_stage_id
        foreign key (stage_id)
        references  stage(id)
        on update   cascade
        on delete   cascade
);

-- membuat tabel user_game_biodata
    --user_game_id merupakan foreign key yang merujuk pada table user_game
    --birth_date merupakan tanggal lahir dan tidak mungkin bernilai null
    --birth_place merupakan tempat lahir dan memungkinkan untuk bernilai null
    --pada user_game_id jika terdapat penghapusan data user_game maka user_game_biodata dari user tersebut akan dihapus juga.
create table user_game_biodata(
    id              bigserial       primary key,
    user_game_id    bigint          not null,
    birth_date      date       not null,
    birth_place     varchar(255)    default null,
    constraint      fk_user_game
        foreign key (user_game_id)
        references  user_game(id)
        on delete   cascade
        on update   cascade
);