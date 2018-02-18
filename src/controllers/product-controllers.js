'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.getByTag = (req, res, next) => {
  Product.find(
    {
      tags: req.params.tag,
      active: true
    },
    'title description price slug tags'
  )
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res
        .status(400)
        .send({ message: 'Falha ao cadastrar Produto!', data: error });
    });
};

exports.getById = (req, res, next) => {
  Product.findById(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res
        .status(400)
        .send({ message: 'Falha ao cadastrar Produto!', data: error });
    });
};

exports.getBySlug = (req, res, next) => {
  Product.findOne(
    {
      slug: req.params.slug,
      active: true
    },
    'title description price slug tags'
  )
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res
        .status(400)
        .send({ message: 'Falha ao cadastrar Produto!', data: error });
    });
};

exports.get = (req, res, next) => {
  Product.find({ active: true }, 'title slug price')
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res
        .status(400)
        .send({ message: 'Falha ao cadastrar Produto!', data: error });
    });
};

exports.post = (req, res, next) => {
  let product = new Product(req.body);

  product
    .save()
    .then(resp => {
      res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
    })
    .catch(error => {
      res
        .status(400)
        .send({ message: 'Falha ao cadastrar Produto!', data: error });
    });
};

exports.put = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      slug: req.body.slug
    }
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(error => {
      res
        .status(400)
        .send({ message: 'Falha ao atualziar Produto!', data: error });
    });
};

exports.delete = (req, res, next) => {
  Product.findOneAndRemove(req.params.id)
    .then(data => {
      res.status(200).send({message: 'Produto removido com sucesso!'});
    })
    .catch(error => {
      res
        .status(400)
        .send({ message: 'Falha ao remover Produto!', data: error });
    });
};
