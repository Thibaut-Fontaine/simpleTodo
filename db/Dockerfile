FROM postgres:9.6.17-alpine
WORKDIR /pg
COPY . /pg
#RUN systemctl start postgresql
RUN createdb todo
RUN psql -f /pg/db.sql todo
EXPOSE 5432
CMD ["systemctl", "start", "postgresql"]
