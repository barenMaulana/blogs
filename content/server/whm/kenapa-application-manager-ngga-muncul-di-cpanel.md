---
title: Application Manager Tidak Muncul Di Cpanel
description: Waktu itu gua mau deploy nuxt app kan ke server, cuma bingung nih soalnya application manager ngga muncul di cpanel, semoga blog gua ini bisa bantu kalian yang punya masalah serupa
publishedAt: 2022-02-19
image: https://images.unsplash.com/photo-1626624338641-b99e0d32c958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
authors:
  - name: Baren Maulana
    avatarUrl: https://lh3.googleusercontent.com/a-/AOh14Gj5QAs8KJgc6n-0YBzBgyjTJb7zsV_mYxoHmifxkw=s96-c
    link: https://github.com/barenMaulana
tags:
  - server
  - whm
  - cpanel
---


Oke kita mulai aja langsung, inget tujuan kita munculin **Application Manager** yang ada di cpanel, yang kita butuhkan :
1. akses whm
2. akses cpanel

## Login ke WHM
untuk login ke whm, kalian bisa lewat **namadomain.com:2087** kalau ngga bisa, coba cek ke dashboard tempat kalian beli vps.

## Cari EasyApache 4
di kolom search sebelah kiri atas, kalian bisa mengetikan **easyApache** untuk mencari easyApache 4 di WHM.

![image](/gambar-content/server/easyapache4.png)

## Install Nodejs Melalui WHM
klik **customize**

![image](/gambar-content/server/customize.png)

klik **additional packages**, lalu install **nodejs**

![image](/gambar-content/server/nodejs.png)

Setelah itu kalian bisa klik **Provision** buat save perubahan yang sudah kalian lakukan.

## Buka Terminal WHM
buka terminal, kalian bisa melalui **ssh** atau biar gampang bisa lewat whm aja, karena OS saya centos jadi saya pake *yum*.

<code-group>
  <code-block label="terminal/ssh" active>

  ```bash
    yum install ea-ruby27-mod_passenger ea-apache24-mod_env
  ```

  </code-block>
</code-group>

## Penutup
Oke selesai, sekarang kalian bisa akses cpanel, lalu cari **Application Manager** dibagian software, semoga ada ya :)
